class UsersController < ApplicationController

    #REMOVE Skip for :show eventually
    skip_before_action :authorize, only: [:create, :show]

    #signup
    def create

    end

    #get which user is logged in
    def show
        byebug
        #Get current user

    end
end
