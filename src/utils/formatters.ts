export const formatPhone = (phone: string) => {
  return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
}

export const formatTaxId = (taxId: string) => {
  if (taxId.length === 11) {
    return taxId.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  }

  return taxId.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5')
}

export const clearPhoneMask = (phone: string) => {
  return phone.replace(/\D/g, '')
}

export const clearTaxIdMask = (taxId: string) => {
  return taxId.replace(/\D/g, '')
}
