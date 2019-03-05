class ItinDateSerializer < ActiveModel::Serializer
    attributes :id, :date, :itinerary_id
    belongs_to :itinerary, include: :all
    has_many :ipoints, serializer: IpointSerializer
end