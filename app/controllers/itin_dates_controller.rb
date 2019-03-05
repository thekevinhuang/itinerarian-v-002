class ItinDatesController < ApplicationController

    def create
        @itin_date = ItinDate.new(itin_date_params)

        if @itin_date.save
            render json: @itin_date
        else
            render json: {error: @itin.errors.fullMessage}, status: 500
        end
    end

    def show
        @itin_date = ItinDate.find_by(id: params[:id])

        render json: @itin_date
    end

    def index
        if (params[:itinerary_id])
            @itin_dates = ItinDate.where(itinerary_id: params[:itinerary_id])
        else
            @itin_dates = ItinDate.all
        end

        render json: @itin_dates
    end

    private

    def itin_date_params
        params.require(:itin_date).permit(:date, :itinerary_id)
    end

end