class Book < ApplicationRecord
    has_many :excerpts
    has_many :users, through: :excerpts

    validates :author, :title, presence: true

end
