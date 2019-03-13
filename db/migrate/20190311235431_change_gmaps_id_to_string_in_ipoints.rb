class ChangeGmapsIdToStringInIpoints < ActiveRecord::Migration[5.2]
  def change
    change_column :ipoints, :gmaps_id, :string
  end
end
