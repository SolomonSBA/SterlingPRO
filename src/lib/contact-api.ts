/**
 * SterlingPro contact form – posts to our Node API (single-folder deploy).
 * Set VITE_CONTACT_API_URL in .env.production (e.g. http://sterlingprong.com until SSL, then https://...).
 */

export function getContactApiUrl(): string | undefined {
  const url = import.meta.env.VITE_CONTACT_API_URL as string | undefined;
  return url ? url.replace(/\/$/, '') : undefined;
}

export type ContactFormData = {
  name: string;
  email: string;
  company?: string;
  product?: string;
  location?: string;
  industry?: string;
  message: string;
};

export async function submitContactForm(data: ContactFormData): Promise<{ ok: boolean; error?: string }> {
  const apiUrl = getContactApiUrl();
  // Fallback to same-origin so deployments and local proxy keep working even if env var is missing.
  const baseUrl = apiUrl ?? '';
  try {
    const res = await fetch(`${baseUrl}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        company: data.company || '',
        product: data.product || '',
        location: data.location || '',
        industry: data.industry || '',
        message: data.message,
      }),
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      return { ok: false, error: (json as { error?: string }).error || 'Submission failed' };
    }
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Network error' };
  }
}
