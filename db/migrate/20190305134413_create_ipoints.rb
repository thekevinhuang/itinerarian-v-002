class CreateIpoints < ActiveRecord::Migration[5.2]
  def change
    create_table :ipoints do |t|
      t.string :name
      t.string :description
      t.string :location
      t.integer :itin_date_id
    end
  end
end
