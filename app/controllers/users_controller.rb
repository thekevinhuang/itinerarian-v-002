class UsersController < ApplicationController

    def create
        @user = User.new(user_params)

        if @user.save
            render json: @user
        else

        end

    end

    def show
        @user = User.find_by(id: params[:id])

        render json: @user
    end

    def index
        @users = User.all

        render json: @users
    end

    private

    def user_params
        params.require(:user).permit(:name, :email, :password)
    end



end
