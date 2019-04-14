class CreatePackingItems < ActiveRecord::Migration[5.2]
  def change
    create_table :packing_items do |t|
      t.string :name
      t.string :description
      t.integer :quantity
      t.integer :itinerary_id
    end
  end
end
