class IpointsController < ApplicationController

    def create
        @ipoint = Ipoint.new(ipoint_params)

        if @ipoint.save
            render json: @ipoint
        else
            render json: {error: @ipoint.errors.fullMessage}, status: 500
        end
    end

    def show
        @ipoint = Ipoint.find_by(id: params[:id])

        render json: @ipoint
    end

    def index
        if(params[:itin_date_id])
            @ipoints = Ipoint.where(itin_date_id: params[:itin_date_id])
        else
            @ipoints = Ipoint.all
        end

        render json: @ipoints
    end

    def destroy
        @ipoint =  Ipoint.find_by(id: params[:id])
        @itin_date = @ipoint.itin_date
        @ipoint.destroy
        @ipoints = Ipoint.where(itin_date_id: @itin_date.id)
        render json: @ipoints
    end

    private

    def ipoint_params
        params.require(:ipoint).permit(:name, :description, :location, :itin_date_id, :gmaps_id)
    end

    

end