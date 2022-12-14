class ExcerptsController < ApplicationController

    def create
        excerpt = current_user.excerpts.create(excerpt_params)
        if excerpt.valid?
            render json: excerpt
        else
            render json: { errors: excerpt.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def index
        # byebug
        excerpts = current_user.excerpts.uniq
        render json: excerpts
    end

    def update
        excerpt = Excerpt.find_by(id: params[:id])
        if excerpt
            excerpt.update(excerpt_params)
            render json: excerpt
        else
            render json: { error: "Not Found" }, status: :unauthorized
        end
    end

    def destroy
        excerpt = Excerpt.find_by(id: params[:id])
        excerpt.destroy
    end

    private

    def current_user
        User.find_by(id: session[:user_id])
    end

    def current_book
        current_user.books.find_by(id: params[:bookId])
    end

    def excerpt_params
        params.permit(:quote,:context,:page,:book_id)
    end

end
