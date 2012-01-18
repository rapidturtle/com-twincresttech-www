module Support
  module Wavetronix
    class ProductsController < BaseController
      def show
        @product = Product.find(params[:id], params: { product_line_id: params[:product_line_id] })
        @download_types = DownloadType.all
      end

    end
  end
end
