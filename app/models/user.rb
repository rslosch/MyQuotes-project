class User < ApplicationRecord
    has_secure_password
    has_many :excerpts
    has_many :books, through: :excerpts 
end
