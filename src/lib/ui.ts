// Small browser helpers shared by calculator pages.
export const val = (id: string): number => {
  const el = document.getElementById(id) as HTMLInputElement | HTMLSelectElement | null;
  return el ? parseFloat(el.value) : NaN;
};
export const sel = (id: string): string => (document.getElementById(id) as HTMLSelectElement).value;
export const out = (id: string, text: string) => {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
};
export const fmt = (n: number, d = 0) =>
  Number.isFinite(n) ? n.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d }) : '—';
export const money = (n: number) =>
  Number.isFinite(n) ? (n < 0 ? '−' : '') + Math.abs(n).toLocaleString('en-US', { maximumFractionDigits: 0 }) : '—';

/** Keep inputs in the URL so results can be shared; restore on load. */
export function bindForm(form: HTMLFormElement, run: () => void) {
  form.querySelectorAll<HTMLInputElement | HTMLSelectElement>('input, select').forEach((el) => (el.dataset.default = el.value));
  const p = new URLSearchParams(location.search);
  form.querySelectorAll<HTMLInputElement | HTMLSelectElement>('input, select').forEach((el) => {
    const v = p.get(el.id);
    if (v !== null) el.value = v;
  });
  const go = () => {
    run();
    const q = new URLSearchParams();
    form.querySelectorAll<HTMLInputElement | HTMLSelectElement>('input, select').forEach((el) => {
      if (el.value !== el.dataset.default) q.set(el.id, el.value);
    });
    history.replaceState(null, '', q.toString() ? `?${q}` : location.pathname);
  };
  form.addEventListener('input', go);
  go();
}
/** True if all numbers are finite and > 0 (or >= 0 when allowZero). */
export const valid = (nums: number[], allowZero = false) => nums.every((n) => Number.isFinite(n) && (allowZero ? n >= 0 : n > 0));
