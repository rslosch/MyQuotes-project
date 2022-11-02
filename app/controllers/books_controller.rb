class BooksController < ApplicationController

    def create
        # book = current_user.books.create(book_params)
        book = Book.create(book_params)
        if book.valid?
            render json: book
        else
            render json: { errors: book.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def index
        books = Book.all.uniq
        # books = current_user.books.uniq 
        render json: books
    end

    #comment this out
    def show
        # book = current_user.books.find_by(id: params[:id])
        book = Book.find_by(id: params[:id])

        if book
            render json: book
        else
            render json: { error: "Not Found" }, status: :unauthorized
        end
    end

    def update
        # book = current_user.books.find_by(id: params[:id])
        book = Book.find_by(id: params[:id])
        if book
            book.update(book_params)
            render json: book
        else
            render json: { error: "Not Found" }, status: :unauthorized
        end
    end

    def destroy
        # book = current_user.books.find_by(id: params[:id])
        book = Book.find_by(id: params[:id])
        book.destroy
    end

    private

    def current_user
        User.find_by(id: session[:user_id])
    end


    def book_params
        params.permit(:title, :author)
    end
end
