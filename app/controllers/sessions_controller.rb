class SessionsController < ApplicationController

    skip_before_action :authorize
    #login
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: "Invalid username or password"}, status: :unauthorized
        end
    end

    #logout
    def destroy
        # byebug
        session.clear
        head :no_content
    end
end
