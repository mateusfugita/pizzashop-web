import { api } from '@/lib/axios'

export interface RegisterRestaurantBody {
  resturantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurant({
  resturantName,
  managerName,
  email,
  phone,
}: RegisterRestaurantBody) {
  await api.post('/restaurants', {
    resturantName,
    managerName,
    email,
    phone,
  })
}
