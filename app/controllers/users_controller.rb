class UsersController < ApplicationController

    #REMOVE Skip for :show eventually
    skip_before_action :authorize, only: [:create, :show]

    #signup
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    #get which user is logged in
    def show
        #Get current user
        user = User.find_by(id: session[:user_id])
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end
