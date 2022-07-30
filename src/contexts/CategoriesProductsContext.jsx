/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, {
  createContext, useState, useEffect, useRef,
} from 'react';
// import api, { http } from '../helpers/api';

const productsFromDb = [
  {
    _id: 1, nome: 'Amstel', descricao: 'Latão 473mL', categoria: 'cervejas', preco: 7,
  },
  {
    _id: 2, nome: 'Heineken', descricao: 'Latão 473mL', categoria: 'cervejas', preco: 10,
  },
  {
    _id: 3, nome: 'Maracujá', descricao: 'c/ cachaça 200mL', categoria: 'drinks', preco: 10,
  },
  {
    _id: 4, nome: 'Mojito', descricao: 'c/ rum 400mL', categoria: 'drinks', preco: 15,
  },
  {
    _id: 5, nome: 'Gengibre', descricao: 'c/ vodka 400mL', categoria: 'drinks', preco: 15,
  },
  {
    _id: 6, nome: 'Hibiscus e especiarias', descricao: 'c/ vodka 400mL', categoria: 'drinks', preco: 15,
  },
  {
    _id: 7, nome: 'Cachaça Bakunin', descricao: '', categoria: 'doses', preco: 7,
  },
  {
    _id: 8, nome: 'Jambruna', descricao: 'Treme', categoria: 'doses', preco: 12,
  },
  {
    _id: 9, nome: 'Limonada', descricao: 'Tradicional', categoria: 'sucos', preco: 6,
  },
  {
    _id: 10, nome: 'Coca', descricao: 'Lata 350mL', categoria: 'refri', preco: 6,
  },
  {
    _id: 11, nome: 'Guaraná', descricao: 'Lata 350mL', categoria: 'refri', preco: 6,
  },
  {
    _id: 12, nome: 'Água', descricao: 'com e sem gás', categoria: 'água', preco: 6,
  },
  {
    _id: 13, nome: 'Grão de bico com curry', descricao: '+ maionese', categoria: 'vegBurgers', preco: 20,
  },
  {
    _id: 14, nome: 'Lentilha com beterraba', descricao: '+ babaganuche', categoria: 'vegBurgers', preco: 20,
  },
  {
    _id: 15, nome: 'Kibão com húmus', descricao: '', categoria: 'salgados', preco: 9,
  },
  {
    _id: 16, nome: 'Esfirra de berinjela', descricao: '', categoria: 'salgados', preco: 9,
  },
  {
    _id: 17, nome: 'Esfirra de palmito', descricao: '', categoria: 'salgados', preco: 9,
  },
  {
    _id: 18, nome: 'Coxinha de soja', descricao: '', categoria: 'salgados', preco: 9,
  },
  {
    _id: 19, nome: 'Batata doce', descricao: '70g', categoria: 'chips', preco: 8,
  },
  {
    _id: 20, nome: 'Banana com ervas finas', descricao: '70g', categoria: 'chips', preco: 8,
  },
  {
    _id: 21, nome: 'Combo Banana + Batata', descricao: '140g', categoria: 'chips', preco: 15,
  },
  {
    _id: 22, nome: 'MaraVegan', descricao: 'bombom', categoria: 'sobremesas', preco: 8,
  },
  {
    _id: 23, nome: 'Cookies de chocolate', descricao: '', categoria: 'sobremesas', preco: 8,
  },
];

const CategoriesProductsContext = createContext({});

export function CategoriesProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  const [categories, setCategories] = useState([]);

  const firstRender = useRef(true);

  useEffect(() => {
    (async () => {
      if (firstRender.current) {
        firstRender.current = false;

        // try {
        //   const fetched = await api.get('/products');
        //   if (fetched.status === http.OK) setProducts(fetched.data);
        // } catch (error) {
        //   console.error(error);
        // }

        setProducts(productsFromDb);

        const extractedCategories = productsFromDb // código duplicado
          .map((product) => product.categoria);

        const uniqueCategories = [...new Set(extractedCategories)];

        setCategories(uniqueCategories);
      }
    })();
  }, []);

  return (
    <CategoriesProductsContext.Provider
      value={{ products, categories }}
    >
      {children}
    </CategoriesProductsContext.Provider>
  );
}

export default CategoriesProductsContext;
