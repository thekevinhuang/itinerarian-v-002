class ItinerariesController < ApplicationController
    def create
        @itinerary = Itinerary.new(itinerary_params)

        if @itinerary.save
            render json: @itinerary
        else
            render json: {error: @itinerary.errors.fullMessage}, status: 500
        end
    end

    def show
        @itinerary = Itinerary.find_by(id: params[:itinerary_id])

        render json: @itinerary
    end

    def index
        if (params[:user_id])
            @itineraries = Itinerary.all.select{|itinerary| itinerary.user_id ==params[:user_id]}
        else
            @itineraries = Itinerary.all
        end
        render json: @itineraries
    end

    private

    def itinerary_params
        params.require(:itinerary).permit(:name, :description, :user_id)
    end
end