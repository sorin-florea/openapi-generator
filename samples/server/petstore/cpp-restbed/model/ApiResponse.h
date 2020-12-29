/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI-Generator 5.0.0-SNAPSHOT.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/*
 * ApiResponse.h
 *
 * Describes the result of uploading an image resource
 */

#ifndef ApiResponse_H_
#define ApiResponse_H_



#include <string>
#include <memory>
#include <boost/property_tree/ptree.hpp>

namespace org {
namespace openapitools {
namespace server {
namespace model {

/// <summary>
/// Describes the result of uploading an image resource
/// </summary>
class  ApiResponse 
{
public:
    ApiResponse();
    virtual ~ApiResponse();
    
    std::string toJsonString(bool prettyJson = false);
    void fromJsonString(std::string const& jsonString);
    boost::property_tree::ptree toPropertyTree();
    void fromPropertyTree(boost::property_tree::ptree const& pt);

    /////////////////////////////////////////////
    /// ApiResponse members

    /// <summary>
    /// 
    /// </summary>
    int32_t getCode() const;
    void setCode(int32_t value);

    /// <summary>
    /// 
    /// </summary>
    std::string getType() const;
    void setType(std::string value);

    /// <summary>
    /// 
    /// </summary>
    std::string getMessage() const;
    void setMessage(std::string value);
protected:
    int32_t m_Code;
    std::string m_Type;
    std::string m_Message;
};

}
}
}
}

#endif /* ApiResponse_H_ */
