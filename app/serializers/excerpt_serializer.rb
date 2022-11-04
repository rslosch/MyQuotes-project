class ExcerptSerializer < ActiveModel::Serializer
  attributes :id, :quote, :context, :page

  belongs_to :book
end
