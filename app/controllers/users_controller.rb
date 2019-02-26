class UsersController < ApplicationController

    def create
        
    end

    def show

    end

    def index
        @users = User.all

        render json: @users
    end

    private



end
