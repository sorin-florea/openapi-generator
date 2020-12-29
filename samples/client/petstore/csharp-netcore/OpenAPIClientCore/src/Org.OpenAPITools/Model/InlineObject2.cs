/*
 * OpenAPI Petstore
 *
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Org.OpenAPITools.Client.OpenAPIDateConverter;
using OpenAPIClientUtils = Org.OpenAPITools.Client.ClientUtils;

namespace Org.OpenAPITools.Model
{
    /// <summary>
    /// InlineObject2
    /// </summary>
    [DataContract(Name = "inline_object_2")]
    public partial class InlineObject2 : IEquatable<InlineObject2>, IValidatableObject
    {
        /// <summary>
        /// Defines EnumFormStringArray
        /// </summary>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum EnumFormStringArrayEnum
        {
            /// <summary>
            /// Enum GreaterThan for value: >
            /// </summary>
            [EnumMember(Value = ">")]
            GreaterThan = 1,

            /// <summary>
            /// Enum Dollar for value: $
            /// </summary>
            [EnumMember(Value = "$")]
            Dollar = 2

        }


        /// <summary>
        /// Form parameter enum test (string array)
        /// </summary>
        /// <value>Form parameter enum test (string array)</value>
        [DataMember(Name = "enum_form_string_array", EmitDefaultValue = false)]
        public List<EnumFormStringArrayEnum> EnumFormStringArray { get; set; }
        /// <summary>
        /// Form parameter enum test (string)
        /// </summary>
        /// <value>Form parameter enum test (string)</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum EnumFormStringEnum
        {
            /// <summary>
            /// Enum Abc for value: _abc
            /// </summary>
            [EnumMember(Value = "_abc")]
            Abc = 1,

            /// <summary>
            /// Enum Efg for value: -efg
            /// </summary>
            [EnumMember(Value = "-efg")]
            Efg = 2,

            /// <summary>
            /// Enum Xyz for value: (xyz)
            /// </summary>
            [EnumMember(Value = "(xyz)")]
            Xyz = 3

        }

        /// <summary>
        /// Form parameter enum test (string)
        /// </summary>
        /// <value>Form parameter enum test (string)</value>
        [DataMember(Name = "enum_form_string", EmitDefaultValue = false)]
        public EnumFormStringEnum? EnumFormString { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="InlineObject2" /> class.
        /// </summary>
        /// <param name="enumFormStringArray">Form parameter enum test (string array).</param>
        /// <param name="enumFormString">Form parameter enum test (string) (default to EnumFormStringEnum.Efg).</param>
        public InlineObject2(List<EnumFormStringArrayEnum> enumFormStringArray = default(List<EnumFormStringArrayEnum>), EnumFormStringEnum? enumFormString = EnumFormStringEnum.Efg)
        {
            this.EnumFormStringArray = enumFormStringArray;
            this.EnumFormString = enumFormString;
        }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class InlineObject2 {\n");
            sb.Append("  EnumFormStringArray: ").Append(EnumFormStringArray).Append("\n");
            sb.Append("  EnumFormString: ").Append(EnumFormString).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return OpenAPIClientUtils.compareLogic.Compare(this, input as InlineObject2).AreEqual;
        }

        /// <summary>
        /// Returns true if InlineObject2 instances are equal
        /// </summary>
        /// <param name="input">Instance of InlineObject2 to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(InlineObject2 input)
        {
            return OpenAPIClientUtils.compareLogic.Compare(this, input).AreEqual;
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                hashCode = hashCode * 59 + this.EnumFormStringArray.GetHashCode();
                hashCode = hashCode * 59 + this.EnumFormString.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
