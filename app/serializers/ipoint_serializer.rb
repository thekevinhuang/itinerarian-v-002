class IpointSerializer < ActiveModel::Serializer
    attributes :id, :name, :description, :itin_date_id, :location
    belongs_to :itin_date, include: :all
end