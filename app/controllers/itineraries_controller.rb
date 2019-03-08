class ItinerariesController < ApplicationController
    def create
        
        @itinerary = Itinerary.new(itinerary_params)

        startDate= Date.parse(itinerary_dates[:start_date])
        endDate = Date.parse(itinerary_dates[:end_date])

        (startDate..endDate).each do |date|
            @itinerary.itin_dates.build(date: date)
        end

        if @itinerary.save
            render json: @itinerary
        else
            render json: {error: @itinerary.errors.fullMessage}, status: 500
        end
    end

    def show
        @itinerary = Itinerary.where(id: params[:id])

        render json: @itinerary
    end

    def index
        if (params[:user_id])
            @itineraries = Itinerary.where(user_id: params[:user_id])
        else
            @itineraries = Itinerary.all
        end
        render json: @itineraries
    end

    def destroy
        @itinerary = Itinerary.find_by(id: params[:id])
        @user = @itinerary.user
        @itinerary.destroy
        @itineraries = Itinerary.where(user_id: @user.id)
        render json: @itineraries
    end

    private

    def itinerary_params
        params.require(:itinerary).permit(:name, :description, :user_id)
    end

    def itinerary_dates
        params.require(:itinerary).permit(:start_date, :end_date)
    end
end