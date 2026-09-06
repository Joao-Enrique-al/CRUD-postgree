import { DollarSignIcon, ImageIcon, Package2Icon, PlusCircleIcon } from "lucide-react";
import { useProductStore } from "../store/useProductStore";

function AddProductModal() {
  const { addProduct, formData, setFormData, loading } = useProductStore();

  return (
    <dialog id="add_product_modal" className="modal">
      <div className="modal-box">
        {/* BOTÃO FECHAR */}
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">X</button>
        </form>

        {/* CABEÇALHO DO MODAL */}
        <h3 className="font-bold text-xl mb-8">Adicionar novo produto</h3>

        <form onSubmit={addProduct} className="space-y-6">
          <div className="grid gap-6">
            {/* CAMPO NOME DO PRODUTO */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Nome do produto</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <Package2Icon className="size-5" />
                </div>
                <input
                  type="text"
                  placeholder="Digite o nome do produto"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>

            {/* CAMPO PREÇO DO PRODUTO */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Preço</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <DollarSignIcon className="size-5" />
                </div>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0,00"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                />
              </div>
            </div>

            {/* URL DA IMAGEM */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">URL da imagem</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <ImageIcon className="size-5" />
                </div>
                <input
                  type="text"
                  placeholder="https://exemplo.com/imagem.jpg"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* AÇÕES DO MODAL */}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-ghost">Cancelar</button>
            </form>

            <button
              type="submit"
              className="btn btn-primary min-w-[120px]"
              disabled={!formData.name || !formData.price || !formData.image || loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                <>
                  <PlusCircleIcon className="size-5 mr-2" />
                  Adicionar produto
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* FUNDO */}
      <form method="dialog" className="modal-backdrop">
        <button>fechar</button>
      </form>
    </dialog>
  );
}

export default AddProductModal;