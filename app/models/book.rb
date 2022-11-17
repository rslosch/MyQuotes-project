class Book < ApplicationRecord
    has_many :excerpts, dependent: :destroy
    has_many :users, through: :excerpts

    accepts_nested_attributes_for :excerpts

    validates :author, :title, presence: true
    validates :title, uniqueness: true

end
