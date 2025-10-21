import { useQuery } from '@tanstack/react-query'
import api from '@/utils/axios/api'
import { API_ENDPOINTS } from '@/config/api'

async function fetchCustomerById(id) {
  const res = await api.get(API_ENDPOINTS.CUSTOMERS.BY_ID(id))
  console.log('API response for customer by ID:', res.data)
  return res.data
}

export function useCustomerById(id) {
  return useQuery({
    queryKey: ['customer', id],
    queryFn: () => fetchCustomerById(id),
    enabled: !!id,
  })
}

export default useCustomerById
