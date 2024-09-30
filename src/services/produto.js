import axios from 'axios';

export default class ProdutoService {
  async getProdutos() {
    const response = await axios.get('/produto/');
    return response.data.results;
  }

  async getProdutoPorCategoria(categoria_id) {
    const response = await axios.get(`/produtos/?categoria__id=${categoria_id}`);
    return response.data.results;
  }

  async createProduct(produto) {
    const response = await axios.post('/produtos/', produto);
    return response.data;
  }
}