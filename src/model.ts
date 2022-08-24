export interface Product {
    id: string;
    name: string;
    description: string;
    image_url: string;
    slug: string;
    price: number;
    created_at: string;
}

export const products: Product[] = [
    {
      id: 'uuid',
      name: 'produto teste',
      description: 'muito muito texto',
      price: 50.50,
      image_url: 'https://source.unsplash.com/random?product,'+Math.random(),
      slug: 'produto-teste',
      created_at: '2021-06-06T00:00'
    },
    {
        id: 'uuid',
        name: 'produto teste novo',
        description: 'muito muito muito, mais muito texto mesmo',
        price: 248.76,
        image_url: 'https://source.unsplash.com/random?product'+Math.random(),
        slug: 'produto-teste-novo',
        created_at: '2021-06-06T00:00'
      }
  ]