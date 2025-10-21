import { useQuery } from '@tanstack/react-query'
import api from '@/utils/axios/api'
import { API_ENDPOINTS } from '@/config/api'
import buildQueryParams from '@/utils/buildQueryParams.js'

async function fetchCustomers(filters = {}) {
  const query = buildQueryParams(filters)
  const res = await api.get(`${API_ENDPOINTS.CUSTOMERS.BASE}${query}`)
  return res.data || []
}

export function useCustomers(filters = {}) {
  return useQuery({
    queryKey: ['customers', filters],
    queryFn: () => fetchCustomers(filters),
    gcTime: Infinity,
    staleTime: Infinity,
  })
}

export default useCustomers
