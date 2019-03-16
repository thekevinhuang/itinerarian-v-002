class UsersController < ApplicationController

    def create
        
        @user = User.new(user_params)

        if @user.save
            render json: @user
        else
            render json: {
                errors: @user.errors.fullMessages
            }, status: 500
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

    def login
        if authorize && !authorize['uid'].empty?
            @user = User.find_by(email: authorize['info']['email'])

            if !@user
                @user = User.new(username: authorize['info']['email'], email: authorize['info']['email'])
                @user.password = SecureRandom.hex(8)
                @user.save         
            end 

            render json: @user

        else

            @user = User.find_by(username: params[:user][:username])

            if @user

                if @user.authenticate(params[:user][:password])
                    render json: @user
                else
                    render :json => {:errors => @user.errors.full_messages}, :status => 422
                end
            else
                render :json => {:errors => "There was an issue with your login"}, :status => 422
            end
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end

    def authorize
        request.env['omniauth.auth']
    end
end
