class PackingItemSerializer < ActiveModel::Serializer
    attributes :id, :name, :description, :quantity, :itinerary_id
    belongs_to :itinerary, include: :all
end