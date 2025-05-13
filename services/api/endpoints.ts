export const urls = {
  dev: {
    api: "http://127.0.0.1:8000",
  },
  test: {
    api: "http://127.0.0.1:8000",
  },
  prod: {
    api: "http://127.0.0.1:8000",
  },
};

export const endpoints = {
  sections: {
    all_sections: "/sections",
  },
  projects: {
    with_products: "/projects/with-products",
    update_product_quantity: "/products/projects/update-quantity",
    create_project: "/projects/create",
    add_product: "/projects/join-product",
  },
  products: {
    by_section: "/products/by-section",
    by_id: "/products/by-id",
  }
};
