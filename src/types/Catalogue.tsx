export default interface CatalogueType {
  id: number;
  nama_product: string;
  tahun_product: number;
  harga: number;
  gambar_product: string;
  deskripsi_product: string;
  category_id: number;
  category: {
    id: number;
    nama_category: string;
  };
}
