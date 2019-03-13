class AddGmapsIdToIpoints < ActiveRecord::Migration[5.2]
  def change
    add_column :ipoints, :gmaps_id, :integer
  end
end
