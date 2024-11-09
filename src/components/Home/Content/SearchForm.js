import React from 'react';

const SearchForm = ({ activeTab }) => {
    return (
        <div className="search-form">
            {activeTab === "selfDrive" && (
                <form>
                    {/* Form content for "Xe tự lái" */}
                    <div className="mb-3">
                        <label className="form-label fw-bold">Lộ trình</label>
                        <div className="d-flex gap-3 custom-radio">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="tripType" id="tripType1" defaultChecked />
                                <label className="form-check-label" htmlFor="tripType1">
                                    Nội thành
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="tripType" id="tripType2" />
                                <label className="form-check-label" htmlFor="tripType2">
                                    Liên tỉnh
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="tripType" id="tripType3" />
                                <label className="form-check-label" htmlFor="tripType3">
                                    Liên tỉnh (1 chiều)
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pickupLocation" className="form-label">Tôi muốn đón tại...</label>
                        <input type="text" className="form-control" id="pickupLocation" placeholder="Nhập địa điểm" />
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="startDate" className="form-label">Thời gian</label>
                            <input type="datetime-local" className="form-control" id="startDate" defaultValue="2024-11-09T08:00" />
                        </div>
                        <div className="col">
                            <label htmlFor="endDate" className="form-label">&nbsp;</label>
                            <input type="datetime-local" className="form-control" id="endDate" defaultValue="2024-11-09T10:00" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-search w-100">Tìm Xe</button>
                </form>
            )}

            {activeTab === "withDriver" && (
                <form>
                    {/* Form content for "Xe có tài xế" */}
                    <div className="mb-3">
                        <label className="form-label fw-bold">Lộ trình</label>
                        {/* Inner form elements for with driver */}
                        <input type="text" className="form-control" placeholder="Nhập địa điểm có tài xế" />
                    </div>
                    <button type="submit" className="btn btn-search w-100">Tìm Xe</button>
                </form>
            )}

            {activeTab === "longTerm" && (
                <form>
                    {/* Form content for "Thuê xe dài hạn" */}
                    <div className="mb-3">
                        <label className="form-label fw-bold">Lộ trình</label>
                        {/* Inner form elements for long term */}
                        <input type="text" className="form-control" placeholder="Nhập địa điểm dài hạn" />
                    </div>
                    <button type="submit" className="btn btn-search w-100">Tìm Xe</button>
                </form>
            )}
        </div>
    );
};

export default SearchForm;
