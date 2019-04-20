class PackingItemsController < ApplicationController
    def create
        @packing_item = PackingItem.new(packing_item_params)

        if @packing_item.save
            render json: @packing_item
        else
            render json: {error: @packing_item.errors.fullMessage}, status: 500
        end
    end

    def show
        @packing_item = PackingItem.where(id:params[:id])

        render json: @packing_item

    end

    def index
        if params[:itinerary_id]
            @packing_items = PackingItem.where(itinerary_id: params[:itinerary_id])
        else
            @packing_items = PackingItem.all
        end
        render json: @packing_items
    end 

    private

    def packing_item_params
        params.require(:packing_item).permit(:name,:description,:quantity,:itinerary_id)
    end
end