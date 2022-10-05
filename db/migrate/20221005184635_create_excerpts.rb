class CreateExcerpts < ActiveRecord::Migration[6.1]
  def change
    create_table :excerpts do |t|
      t.text :quote
      t.text :context
      t.integer :page
      t.integer :book_id
      t.integer :user_id

      t.timestamps
    end
  end
end
