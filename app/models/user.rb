class User < ApplicationRecord
    has_secure_password
    has_many :excerpts
    has_many :books, through: :excerpts 

    validates :username, :password, :password_confirmation, presence: true
end
