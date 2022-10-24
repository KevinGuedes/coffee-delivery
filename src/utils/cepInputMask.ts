export function cepInputMask(plainText: string): string {
  return plainText.replace(/^(\d{5})(\d)/, '$1-$2')
}
