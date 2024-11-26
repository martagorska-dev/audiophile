const API_URL = "https://audiophile-json-server-martagorska.onrender.com";

export async function getProducts() {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) throw Error("Failed getting products");

  const data = await response.json();

  return data;
}

export async function getProductsFromCategory(category) {
  const response = await fetch(`${API_URL}/products?category=${category}`);

  if (!response.ok) throw Error("Failed getting products");

  const data = await response.json();

  return data;
}

export async function getProduct(slug) {
  const response = await fetch(`${API_URL}/products?slug=${slug}`);

  if (!response.ok) throw Error("Failed getting products");

  const [data] = await response.json();

  return data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/orders`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
  } catch {
    throw Error("Failed creating your order");
  }
}
