class ItinerarySerializer < ActiveModel::Serializer
    attributes :id, :name, :description, :user_id
    has_many :itin_dates, serializer: ItinDateSerializer
    belongs_to :user, include: :all
end