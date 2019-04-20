class ItinerarySerializer < ActiveModel::Serializer
    attributes :id, :name, :description, :user_id
    has_many :itin_dates, serializer: ItinDateSerializer
    has_many :packing_items, serializer: PackingItemSerializer
    belongs_to :user, include: :all
end