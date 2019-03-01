class CreateItinDates < ActiveRecord::Migration[5.2]
  def change
    create_table :itin_dates do |t|
      t.date :date
      t.integer :itinerary_id
    end
  end
end
