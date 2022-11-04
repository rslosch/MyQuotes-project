class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :unique_books

  has_many :excerpts
  # has_many :books, through: :excerpts 
  def unique_books
    object.books.uniq
  end
end
