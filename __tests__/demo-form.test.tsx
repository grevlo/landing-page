/**
 * @jest-environment jsdom
 */
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DemoForm } from '@/components/demo-form'

// ── Mocks ────────────────────────────────────────────────────────────────────

const mockObjectUrl = 'blob:mock-url'

beforeEach(() => {
  jest.clearAllMocks()
  global.URL.createObjectURL = jest.fn(() => mockObjectUrl)
  global.URL.revokeObjectURL = jest.fn()
  // Track anchor clicks without breaking React's createElement usage
  jest.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {})
})

afterEach(() => {
  jest.restoreAllMocks()
})

// ── Helpers ──────────────────────────────────────────────────────────────────

function makePdfBlob() {
  return new Blob(['%PDF-1.4 fake content'], { type: 'application/pdf' })
}

function mockFetchSuccess() {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    status: 200,
    blob: () => Promise.resolve(makePdfBlob()),
  } as unknown as Response)
}

function mockFetchHttpError(status: number) {
  global.fetch = jest.fn().mockResolvedValue({
    ok: false,
    status,
    blob: () => Promise.resolve(new Blob()),
  } as unknown as Response)
}

function mockFetchNetworkError() {
  global.fetch = jest.fn().mockRejectedValue(new Error('Network error'))
}

function mockFetchPending() {
  global.fetch = jest.fn().mockReturnValue(new Promise(() => {}))
}

async function fillAndSubmit(
  url = 'https://example.com',
  agency = 'Test Agency',
) {
  const user = userEvent.setup()
  await user.type(screen.getByPlaceholderText(/acme digital ltd/i), agency)
  await user.type(screen.getByPlaceholderText(/youragency\.co\.uk/i), url)
  await user.click(screen.getByRole('button', { name: /generate my free report/i }))
}

// ── Render ────────────────────────────────────────────────────────────────────

describe('DemoForm — rendering', () => {
  it('renders both input fields', () => {
    render(<DemoForm />)
    expect(screen.getByPlaceholderText(/youragency\.co\.uk/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/acme digital ltd/i)).toBeInTheDocument()
  })

  it('does not render an email field', () => {
    render(<DemoForm />)
    expect(screen.queryByPlaceholderText(/your@agency\.com/i)).not.toBeInTheDocument()
    expect(screen.queryByLabelText(/email/i)).not.toBeInTheDocument()
  })

  it('renders visible labels for both fields', () => {
    render(<DemoForm />)
    expect(screen.getByLabelText(/agency name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/your website url/i)).toBeInTheDocument()
  })

  it('renders the submit button with correct label', () => {
    render(<DemoForm />)
    expect(screen.getByRole('button', { name: /generate my free report/i })).toBeInTheDocument()
  })

  it('does not show error or success state on initial render', () => {
    render(<DemoForm />)
    expect(screen.queryByText(/something went wrong/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/downloading/i)).not.toBeInTheDocument()
  })

  it('both fields and button are enabled on initial render', () => {
    render(<DemoForm />)
    expect(screen.getByPlaceholderText(/youragency\.co\.uk/i)).not.toBeDisabled()
    expect(screen.getByPlaceholderText(/acme digital ltd/i)).not.toBeDisabled()
    expect(screen.getByRole('button')).not.toBeDisabled()
  })

  it('renders the privacy note', () => {
    render(<DemoForm />)
    expect(screen.getByText(/we don't store your details/i)).toBeInTheDocument()
  })
})

// ── Happy path ────────────────────────────────────────────────────────────────

describe('DemoForm — happy path', () => {
  it('calls the correct API URL with the submitted URL and agencyName', async () => {
    mockFetchSuccess()
    render(<DemoForm />)
    await fillAndSubmit('https://myclient.co.uk', 'Test Agency')

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        'https://api.grevlo.com/v1/demo/report?url=https%3A%2F%2Fmyclient.co.uk&agencyName=Test%20Agency',
      )
    })
  })

  it('shows loading text and 45-second warning while request is in flight', async () => {
    mockFetchPending()
    render(<DemoForm />)
    await fillAndSubmit()
    expect(screen.getByText(/generating your report/i)).toBeInTheDocument()
    expect(screen.getByText(/45 seconds/i)).toBeInTheDocument()
  })

  it('disables all inputs and button during loading', async () => {
    mockFetchPending()
    render(<DemoForm />)
    await fillAndSubmit()
    expect(screen.getByPlaceholderText(/youragency\.co\.uk/i)).toBeDisabled()
    expect(screen.getByPlaceholderText(/acme digital ltd/i)).toBeDisabled()
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('creates a blob URL on success', async () => {
    mockFetchSuccess()
    render(<DemoForm />)
    await fillAndSubmit()
    await waitFor(() => expect(URL.createObjectURL).toHaveBeenCalled())
  })

  it('triggers a download click on success', async () => {
    mockFetchSuccess()
    render(<DemoForm />)
    await fillAndSubmit()
    await waitFor(() =>
      expect(HTMLAnchorElement.prototype.click).toHaveBeenCalledTimes(1),
    )
  })

  it('revokes the object URL after download to prevent memory leaks', async () => {
    mockFetchSuccess()
    render(<DemoForm />)
    await fillAndSubmit()
    await waitFor(() =>
      expect(URL.revokeObjectURL).toHaveBeenCalledWith(mockObjectUrl),
    )
  })

  it('shows success state with founding partner link after download', async () => {
    mockFetchSuccess()
    render(<DemoForm />)
    await fillAndSubmit()
    await waitFor(() => {
      expect(screen.getByText(/your report is downloading/i)).toBeInTheDocument()
      expect(screen.getByRole('link', { name: /founding partner/i })).toBeInTheDocument()
    })
  })

  it('"Try another URL" resets the form to idle with cleared fields', async () => {
    mockFetchSuccess()
    render(<DemoForm />)
    await fillAndSubmit()
    await waitFor(() => screen.getByText(/your report is downloading/i))

    const user = userEvent.setup()
    await user.click(screen.getByRole('button', { name: /try another url/i }))

    expect(screen.getByRole('button', { name: /generate my free report/i })).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/youragency\.co\.uk/i)).toHaveValue('')
    expect(screen.getByPlaceholderText(/acme digital ltd/i)).toHaveValue('')
  })

  it('calls the API exactly once per submit — no duplicate requests', async () => {
    mockFetchSuccess()
    render(<DemoForm />)
    await fillAndSubmit()
    await waitFor(() => screen.getByText(/downloading/i))
    expect(fetch).toHaveBeenCalledTimes(1)
  })
})

// ── Unhappy paths ─────────────────────────────────────────────────────────────

describe('DemoForm — unhappy paths', () => {
  it('shows error when API returns 500', async () => {
    mockFetchHttpError(500)
    render(<DemoForm />)
    await fillAndSubmit()
    await waitFor(() => expect(screen.getByText(/something went wrong/i)).toBeInTheDocument())
  })

  it('shows error when API returns 429 (rate limited)', async () => {
    mockFetchHttpError(429)
    render(<DemoForm />)
    await fillAndSubmit()
    await waitFor(() => expect(screen.getByText(/something went wrong/i)).toBeInTheDocument())
  })

  it('shows error when API returns 503 (service unavailable)', async () => {
    mockFetchHttpError(503)
    render(<DemoForm />)
    await fillAndSubmit()
    await waitFor(() => expect(screen.getByText(/something went wrong/i)).toBeInTheDocument())
  })

  it('shows error on complete network failure', async () => {
    mockFetchNetworkError()
    render(<DemoForm />)
    await fillAndSubmit()
    await waitFor(() => expect(screen.getByText(/something went wrong/i)).toBeInTheDocument())
  })

  it('re-enables the submit button after an error so the user can retry', async () => {
    mockFetchNetworkError()
    render(<DemoForm />)
    await fillAndSubmit()
    await waitFor(() => screen.getByText(/something went wrong/i))
    expect(screen.getByRole('button', { name: /generate my free report/i })).not.toBeDisabled()
  })

  it('does not create a blob URL when the API fails', async () => {
    mockFetchHttpError(500)
    render(<DemoForm />)
    await fillAndSubmit()
    await waitFor(() => screen.getByText(/something went wrong/i))
    expect(URL.createObjectURL).not.toHaveBeenCalled()
  })

  it('does not trigger a download when the API fails', async () => {
    mockFetchNetworkError()
    render(<DemoForm />)
    await fillAndSubmit()
    await waitFor(() => screen.getByText(/something went wrong/i))
    expect(HTMLAnchorElement.prototype.click).not.toHaveBeenCalled()
  })

  it('does not show success state when the API fails', async () => {
    mockFetchHttpError(500)
    render(<DemoForm />)
    await fillAndSubmit()
    await waitFor(() => screen.getByText(/something went wrong/i))
    expect(screen.queryByText(/your report is downloading/i)).not.toBeInTheDocument()
  })
})

// ── Edge cases ────────────────────────────────────────────────────────────────

describe('DemoForm — edge cases', () => {
  it('prepends https:// when URL has no protocol', async () => {
    mockFetchSuccess()
    render(<DemoForm />)
    await fillAndSubmit('example.co.uk')
    await waitFor(() =>
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('url=https%3A%2F%2Fexample.co.uk'),
      ),
    )
  })

  it('preserves http:// as-is and does not force https', async () => {
    mockFetchSuccess()
    render(<DemoForm />)
    await fillAndSubmit('http://oldsite.co.uk')
    await waitFor(() =>
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('url=http%3A%2F%2Foldsite.co.uk'),
      ),
    )
  })

  it('URL-encodes special characters so they cannot corrupt the query string', async () => {
    mockFetchSuccess()
    render(<DemoForm />)
    await fillAndSubmit('https://example.com/path?foo=bar&baz=qux')
    await waitFor(() => {
      const calledUrl = (fetch as jest.Mock).mock.calls[0][0] as string
      expect(calledUrl).toContain('url=https%3A%2F%2Fexample.com')
      expect(calledUrl).not.toMatch(/url=https:\/\//)
    })
  })

  it('handles a very long URL without throwing', async () => {
    mockFetchSuccess()
    render(<DemoForm />)
    await fillAndSubmit('https://' + 'a'.repeat(50) + '.co.uk')
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1))
  }, 15000)

  it('URL field is marked required', () => {
    render(<DemoForm />)
    expect(screen.getByPlaceholderText(/youragency\.co\.uk/i)).toBeRequired()
  })

  it('agency name field is marked required', () => {
    render(<DemoForm />)
    expect(screen.getByPlaceholderText(/acme digital ltd/i)).toBeRequired()
  })

  it('URL field accepts bare domains without a protocol', async () => {
    mockFetchSuccess()
    render(<DemoForm />)
    // type="text" is used so jsdom does not block bare domain submission
    expect(screen.getByPlaceholderText(/youragency\.co\.uk/i)).toHaveAttribute('type', 'text')
  })
})
