import { useQuery } from '@tanstack/react-query'
import api from '@/utils/axios/api'
import { API_ENDPOINTS } from '@/config/api'
import buildQueryParams from '@/utils/buildQueryParams'

async function fetchCustomers(filters) {
  const query = buildQueryParams(filters)
  const url = `${API_ENDPOINTS.CUSTOMERS.PAGINATED}${query}`
  const res = await api.get(url)
  return res.data || []
}

export function useCustomersPaginated(filters = {}) {
  return useQuery({
    queryKey: ['customers_paginated', filters],
    queryFn: () => fetchCustomers(filters),
    gcTime: Infinity,
    staleTime: Infinity,
  })
}

export default useCustomersPaginated
