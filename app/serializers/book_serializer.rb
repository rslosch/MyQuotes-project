class BookSerializer < ActiveModel::Serializer
  attributes :id, :author, :title

  has_many :excerpts
end
