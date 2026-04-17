export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      addresses: {
        Row: {
          address_line1: string
          address_line2: string | null
          country: string
          created_at: string
          district: string
          id: string
          is_default_billing: boolean
          is_default_shipping: boolean
          label: string | null
          notes: string | null
          postal_code: string
          profile_id: string
          province: string
          recipient_name: string
          recipient_phone: string
          subdistrict: string
          updated_at: string
        }
        Insert: {
          address_line1: string
          address_line2?: string | null
          country?: string
          created_at?: string
          district: string
          id?: string
          is_default_billing?: boolean
          is_default_shipping?: boolean
          label?: string | null
          notes?: string | null
          postal_code: string
          profile_id: string
          province: string
          recipient_name: string
          recipient_phone: string
          subdistrict: string
          updated_at?: string
        }
        Update: {
          address_line1?: string
          address_line2?: string | null
          country?: string
          created_at?: string
          district?: string
          id?: string
          is_default_billing?: boolean
          is_default_shipping?: boolean
          label?: string | null
          notes?: string | null
          postal_code?: string
          profile_id?: string
          province?: string
          recipient_name?: string
          recipient_phone?: string
          subdistrict?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "addresses_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      banners: {
        Row: {
          code: string
          created_at: string
          cta_label: Json | null
          ends_at: string | null
          id: string
          image_mobile_url: string | null
          image_url: string | null
          is_active: boolean
          link_url: string | null
          placement: Database["public"]["Enums"]["banner_placement"]
          sort_order: number
          starts_at: string
          subtitle: Json | null
          title: Json
          updated_at: string
        }
        Insert: {
          code: string
          created_at?: string
          cta_label?: Json | null
          ends_at?: string | null
          id?: string
          image_mobile_url?: string | null
          image_url?: string | null
          is_active?: boolean
          link_url?: string | null
          placement?: Database["public"]["Enums"]["banner_placement"]
          sort_order?: number
          starts_at?: string
          subtitle?: Json | null
          title: Json
          updated_at?: string
        }
        Update: {
          code?: string
          created_at?: string
          cta_label?: Json | null
          ends_at?: string | null
          id?: string
          image_mobile_url?: string | null
          image_url?: string | null
          is_active?: boolean
          link_url?: string | null
          placement?: Database["public"]["Enums"]["banner_placement"]
          sort_order?: number
          starts_at?: string
          subtitle?: Json | null
          title?: Json
          updated_at?: string
        }
        Relationships: []
      }
      brands: {
        Row: {
          country_of_origin: string | null
          created_at: string
          description: Json | null
          display_order: number
          featured: boolean
          id: string
          is_active: boolean
          logo_url: string | null
          name: string
          slug: string
          updated_at: string
          website: string | null
        }
        Insert: {
          country_of_origin?: string | null
          created_at?: string
          description?: Json | null
          display_order?: number
          featured?: boolean
          id?: string
          is_active?: boolean
          logo_url?: string | null
          name: string
          slug: string
          updated_at?: string
          website?: string | null
        }
        Update: {
          country_of_origin?: string | null
          created_at?: string
          description?: Json | null
          display_order?: number
          featured?: boolean
          id?: string
          is_active?: boolean
          logo_url?: string | null
          name?: string
          slug?: string
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
      carts: {
        Row: {
          converted_order_id: string | null
          coupon_code: string | null
          created_at: string
          discount_total: number
          estimated_shipping: number
          estimated_total: number
          expires_at: string | null
          id: string
          item_count: number
          items: Json
          last_activity_at: string
          profile_id: string | null
          session_token: string | null
          status: Database["public"]["Enums"]["cart_status"]
          subtotal: number
          updated_at: string
        }
        Insert: {
          converted_order_id?: string | null
          coupon_code?: string | null
          created_at?: string
          discount_total?: number
          estimated_shipping?: number
          estimated_total?: number
          expires_at?: string | null
          id?: string
          item_count?: number
          items?: Json
          last_activity_at?: string
          profile_id?: string | null
          session_token?: string | null
          status?: Database["public"]["Enums"]["cart_status"]
          subtotal?: number
          updated_at?: string
        }
        Update: {
          converted_order_id?: string | null
          coupon_code?: string | null
          created_at?: string
          discount_total?: number
          estimated_shipping?: number
          estimated_total?: number
          expires_at?: string | null
          id?: string
          item_count?: number
          items?: Json
          last_activity_at?: string
          profile_id?: string | null
          session_token?: string | null
          status?: Database["public"]["Enums"]["cart_status"]
          subtotal?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "carts_converted_order_id_fkey"
            columns: ["converted_order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "carts_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          created_at: string
          description: Json | null
          display_order: number
          featured: boolean
          icon_name: string | null
          id: string
          image_src: string | null
          is_active: boolean
          name: Json
          parent_id: string | null
          seo_description: string | null
          seo_title: string | null
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: Json | null
          display_order?: number
          featured?: boolean
          icon_name?: string | null
          id?: string
          image_src?: string | null
          is_active?: boolean
          name: Json
          parent_id?: string | null
          seo_description?: string | null
          seo_title?: string | null
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: Json | null
          display_order?: number
          featured?: boolean
          icon_name?: string | null
          id?: string
          image_src?: string | null
          is_active?: boolean
          name?: Json
          parent_id?: string | null
          seo_description?: string | null
          seo_title?: string | null
          slug?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "categories_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      coupons: {
        Row: {
          applicable_brand_ids: string[]
          applicable_category_ids: string[]
          applicable_product_ids: string[]
          applicable_tiers: Database["public"]["Enums"]["user_tier"][]
          code: string
          created_at: string
          description: Json | null
          discount_type: Database["public"]["Enums"]["coupon_discount_type"]
          discount_value: number | null
          ends_at: string | null
          first_order_only: boolean
          id: string
          is_active: boolean
          max_discount_amount: number | null
          min_order_amount: number | null
          per_user_limit: number
          stack_type: Database["public"]["Enums"]["coupon_stack_type"]
          stackable: boolean
          starts_at: string
          title: Json
          updated_at: string
          usage_limit: number | null
          used_count: number
        }
        Insert: {
          applicable_brand_ids?: string[]
          applicable_category_ids?: string[]
          applicable_product_ids?: string[]
          applicable_tiers?: Database["public"]["Enums"]["user_tier"][]
          code: string
          created_at?: string
          description?: Json | null
          discount_type: Database["public"]["Enums"]["coupon_discount_type"]
          discount_value?: number | null
          ends_at?: string | null
          first_order_only?: boolean
          id?: string
          is_active?: boolean
          max_discount_amount?: number | null
          min_order_amount?: number | null
          per_user_limit?: number
          stack_type?: Database["public"]["Enums"]["coupon_stack_type"]
          stackable?: boolean
          starts_at?: string
          title: Json
          updated_at?: string
          usage_limit?: number | null
          used_count?: number
        }
        Update: {
          applicable_brand_ids?: string[]
          applicable_category_ids?: string[]
          applicable_product_ids?: string[]
          applicable_tiers?: Database["public"]["Enums"]["user_tier"][]
          code?: string
          created_at?: string
          description?: Json | null
          discount_type?: Database["public"]["Enums"]["coupon_discount_type"]
          discount_value?: number | null
          ends_at?: string | null
          first_order_only?: boolean
          id?: string
          is_active?: boolean
          max_discount_amount?: number | null
          min_order_amount?: number | null
          per_user_limit?: number
          stack_type?: Database["public"]["Enums"]["coupon_stack_type"]
          stackable?: boolean
          starts_at?: string
          title?: Json
          updated_at?: string
          usage_limit?: number | null
          used_count?: number
        }
        Relationships: []
      }
      media: {
        Row: {
          alt_text: Json | null
          attribution: Json | null
          created_at: string
          format: string | null
          height: number | null
          id: string
          public_url: string | null
          size_bytes: number | null
          source: Database["public"]["Enums"]["media_source"]
          source_ref: string | null
          source_url: string | null
          storage_bucket: string
          storage_path: string
          updated_at: string
          uploaded_by: string | null
          usage: Database["public"]["Enums"]["media_usage"]
          width: number | null
        }
        Insert: {
          alt_text?: Json | null
          attribution?: Json | null
          created_at?: string
          format?: string | null
          height?: number | null
          id?: string
          public_url?: string | null
          size_bytes?: number | null
          source?: Database["public"]["Enums"]["media_source"]
          source_ref?: string | null
          source_url?: string | null
          storage_bucket?: string
          storage_path: string
          updated_at?: string
          uploaded_by?: string | null
          usage?: Database["public"]["Enums"]["media_usage"]
          width?: number | null
        }
        Update: {
          alt_text?: Json | null
          attribution?: Json | null
          created_at?: string
          format?: string | null
          height?: number | null
          id?: string
          public_url?: string | null
          size_bytes?: number | null
          source?: Database["public"]["Enums"]["media_source"]
          source_ref?: string | null
          source_url?: string | null
          storage_bucket?: string
          storage_path?: string
          updated_at?: string
          uploaded_by?: string | null
          usage?: Database["public"]["Enums"]["media_usage"]
          width?: number | null
        }
        Relationships: []
      }
      order_items: {
        Row: {
          compare_at_price: number | null
          created_at: string
          id: string
          image_url: string | null
          line_discount: number
          line_subtotal: number
          line_total: number
          order_id: string
          product_id: string | null
          product_title: Json
          quantity: number
          sku: string
          unit_price: number
          variant_id: string | null
          variant_label: string | null
        }
        Insert: {
          compare_at_price?: number | null
          created_at?: string
          id?: string
          image_url?: string | null
          line_discount?: number
          line_subtotal: number
          line_total: number
          order_id: string
          product_id?: string | null
          product_title: Json
          quantity: number
          sku: string
          unit_price: number
          variant_id?: string | null
          variant_label?: string | null
        }
        Update: {
          compare_at_price?: number | null
          created_at?: string
          id?: string
          image_url?: string | null
          line_discount?: number
          line_subtotal?: number
          line_total?: number
          order_id?: string
          product_id?: string | null
          product_title?: Json
          quantity?: number
          sku?: string
          unit_price?: number
          variant_id?: string | null
          variant_label?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_variant_id_fkey"
            columns: ["variant_id"]
            isOneToOne: false
            referencedRelation: "product_variants"
            referencedColumns: ["id"]
          },
        ]
      }
      order_status_history: {
        Row: {
          changed_by: string | null
          created_at: string
          from_status: Database["public"]["Enums"]["order_status"] | null
          id: string
          note: string | null
          order_id: string
          reason: string | null
          to_status: Database["public"]["Enums"]["order_status"]
        }
        Insert: {
          changed_by?: string | null
          created_at?: string
          from_status?: Database["public"]["Enums"]["order_status"] | null
          id?: string
          note?: string | null
          order_id: string
          reason?: string | null
          to_status: Database["public"]["Enums"]["order_status"]
        }
        Update: {
          changed_by?: string | null
          created_at?: string
          from_status?: Database["public"]["Enums"]["order_status"] | null
          id?: string
          note?: string | null
          order_id?: string
          reason?: string | null
          to_status?: Database["public"]["Enums"]["order_status"]
        }
        Relationships: [
          {
            foreignKeyName: "order_status_history_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          billing_address: Json
          cancelled_at: string | null
          coupon_snapshot: Json | null
          created_at: string
          currency: string
          customer_note: string | null
          delivered_at: string | null
          discount_total: number
          guest_email: string | null
          guest_phone: string | null
          id: string
          notes: string | null
          order_number: string
          packed_at: string | null
          paid_at: string | null
          placed_at: string
          profile_id: string | null
          refunded_at: string | null
          shipped_at: string | null
          shipping_address: Json
          shipping_fee: number
          status: Database["public"]["Enums"]["order_status"]
          subtotal: number
          tax: number
          total: number
          updated_at: string
        }
        Insert: {
          billing_address: Json
          cancelled_at?: string | null
          coupon_snapshot?: Json | null
          created_at?: string
          currency?: string
          customer_note?: string | null
          delivered_at?: string | null
          discount_total?: number
          guest_email?: string | null
          guest_phone?: string | null
          id?: string
          notes?: string | null
          order_number: string
          packed_at?: string | null
          paid_at?: string | null
          placed_at?: string
          profile_id?: string | null
          refunded_at?: string | null
          shipped_at?: string | null
          shipping_address: Json
          shipping_fee?: number
          status?: Database["public"]["Enums"]["order_status"]
          subtotal: number
          tax?: number
          total: number
          updated_at?: string
        }
        Update: {
          billing_address?: Json
          cancelled_at?: string | null
          coupon_snapshot?: Json | null
          created_at?: string
          currency?: string
          customer_note?: string | null
          delivered_at?: string | null
          discount_total?: number
          guest_email?: string | null
          guest_phone?: string | null
          id?: string
          notes?: string | null
          order_number?: string
          packed_at?: string | null
          paid_at?: string | null
          placed_at?: string
          profile_id?: string | null
          refunded_at?: string | null
          shipped_at?: string | null
          shipping_address?: Json
          shipping_fee?: number
          status?: Database["public"]["Enums"]["order_status"]
          subtotal?: number
          tax?: number
          total?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      pages: {
        Row: {
          content: Json
          created_at: string
          excerpt: Json | null
          id: string
          og_image_url: string | null
          published_at: string | null
          seo_description: Json | null
          seo_title: Json | null
          slug: string
          status: Database["public"]["Enums"]["page_status"]
          title: Json
          updated_at: string
        }
        Insert: {
          content?: Json
          created_at?: string
          excerpt?: Json | null
          id?: string
          og_image_url?: string | null
          published_at?: string | null
          seo_description?: Json | null
          seo_title?: Json | null
          slug: string
          status?: Database["public"]["Enums"]["page_status"]
          title: Json
          updated_at?: string
        }
        Update: {
          content?: Json
          created_at?: string
          excerpt?: Json | null
          id?: string
          og_image_url?: string | null
          published_at?: string | null
          seo_description?: Json | null
          seo_title?: Json | null
          slug?: string
          status?: Database["public"]["Enums"]["page_status"]
          title?: Json
          updated_at?: string
        }
        Relationships: []
      }
      payment_methods: {
        Row: {
          code: string
          created_at: string
          description: Json | null
          fee_type: Database["public"]["Enums"]["payment_fee_type"]
          fee_value: number
          icon_name: string | null
          id: string
          is_active: boolean
          name: Json
          provider: string | null
          sort_order: number
          updated_at: string
        }
        Insert: {
          code: string
          created_at?: string
          description?: Json | null
          fee_type?: Database["public"]["Enums"]["payment_fee_type"]
          fee_value?: number
          icon_name?: string | null
          id?: string
          is_active?: boolean
          name: Json
          provider?: string | null
          sort_order?: number
          updated_at?: string
        }
        Update: {
          code?: string
          created_at?: string
          description?: Json | null
          fee_type?: Database["public"]["Enums"]["payment_fee_type"]
          fee_value?: number
          icon_name?: string | null
          id?: string
          is_active?: boolean
          name?: Json
          provider?: string | null
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount: number
          created_at: string
          currency: string
          failure_code: string | null
          failure_message: string | null
          fee: number
          id: string
          metadata: Json
          order_id: string
          payment_method_id: string
          processed_at: string | null
          provider: string | null
          provider_reference: string | null
          refund_amount: number | null
          refunded_at: string | null
          slip_image_url: string | null
          status: Database["public"]["Enums"]["payment_status"]
          updated_at: string
        }
        Insert: {
          amount: number
          created_at?: string
          currency?: string
          failure_code?: string | null
          failure_message?: string | null
          fee?: number
          id?: string
          metadata?: Json
          order_id: string
          payment_method_id: string
          processed_at?: string | null
          provider?: string | null
          provider_reference?: string | null
          refund_amount?: number | null
          refunded_at?: string | null
          slip_image_url?: string | null
          status?: Database["public"]["Enums"]["payment_status"]
          updated_at?: string
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string
          failure_code?: string | null
          failure_message?: string | null
          fee?: number
          id?: string
          metadata?: Json
          order_id?: string
          payment_method_id?: string
          processed_at?: string | null
          provider?: string | null
          provider_reference?: string | null
          refund_amount?: number | null
          refunded_at?: string | null
          slip_image_url?: string | null
          status?: Database["public"]["Enums"]["payment_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_payment_method_id_fkey"
            columns: ["payment_method_id"]
            isOneToOne: false
            referencedRelation: "payment_methods"
            referencedColumns: ["id"]
          },
        ]
      }
      product_variants: {
        Row: {
          barcode: string | null
          compare_at_price: number | null
          created_at: string
          display_order: number
          id: string
          image_url: string | null
          is_active: boolean
          option_values: Json
          price: number
          product_id: string
          reserved_quantity: number
          sku: string
          stock_quantity: number
          updated_at: string
          weight_kg: number | null
        }
        Insert: {
          barcode?: string | null
          compare_at_price?: number | null
          created_at?: string
          display_order?: number
          id?: string
          image_url?: string | null
          is_active?: boolean
          option_values?: Json
          price: number
          product_id: string
          reserved_quantity?: number
          sku: string
          stock_quantity?: number
          updated_at?: string
          weight_kg?: number | null
        }
        Update: {
          barcode?: string | null
          compare_at_price?: number | null
          created_at?: string
          display_order?: number
          id?: string
          image_url?: string | null
          is_active?: boolean
          option_values?: Json
          price?: number
          product_id?: string
          reserved_quantity?: number
          sku?: string
          stock_quantity?: number
          updated_at?: string
          weight_kg?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "product_variants_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          additional_category_ids: string[]
          base_price: number
          brand_id: string
          brand_name_snapshot: string | null
          category_id: string
          compare_at_price: number | null
          cost_price: number | null
          created_at: string
          default_variant_id: string | null
          description: Json | null
          dimensions_cm: Json | null
          flash_sale_ends_at: string | null
          flash_sale_price: number | null
          flash_sale_starts_at: string | null
          gallery: Json
          has_variants: boolean
          id: string
          is_featured: boolean
          is_flash_sale: boolean
          low_stock_threshold: number
          published_at: string | null
          rating_average: number
          rating_count: number
          room_tag_ids: string[]
          sales_count: number
          search_vector: unknown
          seo_description: string | null
          seo_og_image_url: string | null
          seo_title: string | null
          short_description: Json | null
          sku: string
          slug: string
          specifications: Json
          status: Database["public"]["Enums"]["product_status"]
          stock_quantity: number
          style_tag_ids: string[]
          tags: string[]
          title: Json
          updated_at: string
          variant_options: Json
          warranty_months: number
          weight_kg: number | null
        }
        Insert: {
          additional_category_ids?: string[]
          base_price: number
          brand_id: string
          brand_name_snapshot?: string | null
          category_id: string
          compare_at_price?: number | null
          cost_price?: number | null
          created_at?: string
          default_variant_id?: string | null
          description?: Json | null
          dimensions_cm?: Json | null
          flash_sale_ends_at?: string | null
          flash_sale_price?: number | null
          flash_sale_starts_at?: string | null
          gallery?: Json
          has_variants?: boolean
          id?: string
          is_featured?: boolean
          is_flash_sale?: boolean
          low_stock_threshold?: number
          published_at?: string | null
          rating_average?: number
          rating_count?: number
          room_tag_ids?: string[]
          sales_count?: number
          search_vector?: unknown
          seo_description?: string | null
          seo_og_image_url?: string | null
          seo_title?: string | null
          short_description?: Json | null
          sku: string
          slug: string
          specifications?: Json
          status?: Database["public"]["Enums"]["product_status"]
          stock_quantity?: number
          style_tag_ids?: string[]
          tags?: string[]
          title: Json
          updated_at?: string
          variant_options?: Json
          warranty_months?: number
          weight_kg?: number | null
        }
        Update: {
          additional_category_ids?: string[]
          base_price?: number
          brand_id?: string
          brand_name_snapshot?: string | null
          category_id?: string
          compare_at_price?: number | null
          cost_price?: number | null
          created_at?: string
          default_variant_id?: string | null
          description?: Json | null
          dimensions_cm?: Json | null
          flash_sale_ends_at?: string | null
          flash_sale_price?: number | null
          flash_sale_starts_at?: string | null
          gallery?: Json
          has_variants?: boolean
          id?: string
          is_featured?: boolean
          is_flash_sale?: boolean
          low_stock_threshold?: number
          published_at?: string | null
          rating_average?: number
          rating_count?: number
          room_tag_ids?: string[]
          sales_count?: number
          search_vector?: unknown
          seo_description?: string | null
          seo_og_image_url?: string | null
          seo_title?: string | null
          short_description?: Json | null
          sku?: string
          slug?: string
          specifications?: Json
          status?: Database["public"]["Enums"]["product_status"]
          stock_quantity?: number
          style_tag_ids?: string[]
          tags?: string[]
          title?: Json
          updated_at?: string
          variant_options?: Json
          warranty_months?: number
          weight_kg?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "products_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_default_variant_id_fkey"
            columns: ["default_variant_id"]
            isOneToOne: false
            referencedRelation: "product_variants"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          date_of_birth: string | null
          full_name: string | null
          gender: Database["public"]["Enums"]["user_gender"] | null
          id: string
          is_active: boolean
          language_preference: Database["public"]["Enums"]["user_language"]
          last_login_at: string | null
          marketing_opt_in: boolean
          order_count: number
          phone: string | null
          tier: Database["public"]["Enums"]["user_tier"]
          total_spent: number
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          date_of_birth?: string | null
          full_name?: string | null
          gender?: Database["public"]["Enums"]["user_gender"] | null
          id: string
          is_active?: boolean
          language_preference?: Database["public"]["Enums"]["user_language"]
          last_login_at?: string | null
          marketing_opt_in?: boolean
          order_count?: number
          phone?: string | null
          tier?: Database["public"]["Enums"]["user_tier"]
          total_spent?: number
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          date_of_birth?: string | null
          full_name?: string | null
          gender?: Database["public"]["Enums"]["user_gender"] | null
          id?: string
          is_active?: boolean
          language_preference?: Database["public"]["Enums"]["user_language"]
          last_login_at?: string | null
          marketing_opt_in?: boolean
          order_count?: number
          phone?: string | null
          tier?: Database["public"]["Enums"]["user_tier"]
          total_spent?: number
          updated_at?: string
        }
        Relationships: []
      }
      reviews: {
        Row: {
          author_name: string | null
          body: string | null
          created_at: string
          helpful_count: number
          id: string
          image_urls: string[]
          is_verified_purchase: boolean
          order_item_id: string | null
          product_id: string
          profile_id: string | null
          rating: number
          reply_at: string | null
          reply_from_brand: string | null
          status: Database["public"]["Enums"]["review_status"]
          title: string | null
          updated_at: string
        }
        Insert: {
          author_name?: string | null
          body?: string | null
          created_at?: string
          helpful_count?: number
          id?: string
          image_urls?: string[]
          is_verified_purchase?: boolean
          order_item_id?: string | null
          product_id: string
          profile_id?: string | null
          rating: number
          reply_at?: string | null
          reply_from_brand?: string | null
          status?: Database["public"]["Enums"]["review_status"]
          title?: string | null
          updated_at?: string
        }
        Update: {
          author_name?: string | null
          body?: string | null
          created_at?: string
          helpful_count?: number
          id?: string
          image_urls?: string[]
          is_verified_purchase?: boolean
          order_item_id?: string | null
          product_id?: string
          profile_id?: string | null
          rating?: number
          reply_at?: string | null
          reply_from_brand?: string | null
          status?: Database["public"]["Enums"]["review_status"]
          title?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "reviews_order_item_id_fkey"
            columns: ["order_item_id"]
            isOneToOne: false
            referencedRelation: "order_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      rooms: {
        Row: {
          created_at: string
          description: Json | null
          icon_name: string | null
          id: string
          image_url: string | null
          is_active: boolean
          name: Json
          slug: string
          sort_order: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: Json | null
          icon_name?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean
          name: Json
          slug: string
          sort_order?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: Json | null
          icon_name?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean
          name?: Json
          slug?: string
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      services: {
        Row: {
          code: string
          created_at: string
          cta_link: string | null
          description: Json | null
          icon_name: string | null
          id: string
          is_active: boolean
          name: Json
          sort_order: number
          updated_at: string
        }
        Insert: {
          code: string
          created_at?: string
          cta_link?: string | null
          description?: Json | null
          icon_name?: string | null
          id?: string
          is_active?: boolean
          name: Json
          sort_order?: number
          updated_at?: string
        }
        Update: {
          code?: string
          created_at?: string
          cta_link?: string | null
          description?: Json | null
          icon_name?: string | null
          id?: string
          is_active?: boolean
          name?: Json
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      shipments: {
        Row: {
          carrier: string | null
          created_at: string
          delivered_at: string | null
          estimated_delivery_at: string | null
          id: string
          notes: string | null
          order_id: string
          returned_at: string | null
          shipped_at: string | null
          shipping_method_id: string
          status: Database["public"]["Enums"]["shipment_status"]
          tracking_number: string | null
          updated_at: string
        }
        Insert: {
          carrier?: string | null
          created_at?: string
          delivered_at?: string | null
          estimated_delivery_at?: string | null
          id?: string
          notes?: string | null
          order_id: string
          returned_at?: string | null
          shipped_at?: string | null
          shipping_method_id: string
          status?: Database["public"]["Enums"]["shipment_status"]
          tracking_number?: string | null
          updated_at?: string
        }
        Update: {
          carrier?: string | null
          created_at?: string
          delivered_at?: string | null
          estimated_delivery_at?: string | null
          id?: string
          notes?: string | null
          order_id?: string
          returned_at?: string | null
          shipped_at?: string | null
          shipping_method_id?: string
          status?: Database["public"]["Enums"]["shipment_status"]
          tracking_number?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "shipments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipments_shipping_method_id_fkey"
            columns: ["shipping_method_id"]
            isOneToOne: false
            referencedRelation: "shipping_methods"
            referencedColumns: ["id"]
          },
        ]
      }
      shipping_methods: {
        Row: {
          base_price: number
          code: string
          created_at: string
          description: Json | null
          estimated_days_max: number | null
          estimated_days_min: number | null
          icon_name: string | null
          id: string
          is_active: boolean
          name: Json
          sort_order: number
          updated_at: string
        }
        Insert: {
          base_price?: number
          code: string
          created_at?: string
          description?: Json | null
          estimated_days_max?: number | null
          estimated_days_min?: number | null
          icon_name?: string | null
          id?: string
          is_active?: boolean
          name: Json
          sort_order?: number
          updated_at?: string
        }
        Update: {
          base_price?: number
          code?: string
          created_at?: string
          description?: Json | null
          estimated_days_max?: number | null
          estimated_days_min?: number | null
          icon_name?: string | null
          id?: string
          is_active?: boolean
          name?: Json
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      stores: {
        Row: {
          address_line1: Json
          address_line2: Json | null
          code: string
          created_at: string
          district: string | null
          email: string | null
          id: string
          image_urls: string[]
          is_active: boolean
          lat: number | null
          lng: number | null
          name: Json
          opening_hours: Json | null
          phone: string | null
          postal_code: string | null
          province: string | null
          services: string[]
          sort_order: number
          subdistrict: string | null
          updated_at: string
        }
        Insert: {
          address_line1: Json
          address_line2?: Json | null
          code: string
          created_at?: string
          district?: string | null
          email?: string | null
          id?: string
          image_urls?: string[]
          is_active?: boolean
          lat?: number | null
          lng?: number | null
          name: Json
          opening_hours?: Json | null
          phone?: string | null
          postal_code?: string | null
          province?: string | null
          services?: string[]
          sort_order?: number
          subdistrict?: string | null
          updated_at?: string
        }
        Update: {
          address_line1?: Json
          address_line2?: Json | null
          code?: string
          created_at?: string
          district?: string | null
          email?: string | null
          id?: string
          image_urls?: string[]
          is_active?: boolean
          lat?: number | null
          lng?: number | null
          name?: Json
          opening_hours?: Json | null
          phone?: string | null
          postal_code?: string | null
          province?: string | null
          services?: string[]
          sort_order?: number
          subdistrict?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      styles: {
        Row: {
          created_at: string
          description: Json | null
          icon_name: string | null
          id: string
          image_url: string | null
          is_active: boolean
          name: Json
          slug: string
          sort_order: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: Json | null
          icon_name?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean
          name: Json
          slug: string
          sort_order?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: Json | null
          icon_name?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean
          name?: Json
          slug?: string
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      wishlists: {
        Row: {
          added_at: string
          id: string
          note: string | null
          product_id: string
          profile_id: string
          variant_id: string | null
        }
        Insert: {
          added_at?: string
          id?: string
          note?: string | null
          product_id: string
          profile_id: string
          variant_id?: string | null
        }
        Update: {
          added_at?: string
          id?: string
          note?: string | null
          product_id?: string
          profile_id?: string
          variant_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "wishlists_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wishlists_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "wishlists_variant_id_fkey"
            columns: ["variant_id"]
            isOneToOne: false
            referencedRelation: "product_variants"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin: { Args: never; Returns: boolean }
      recalc_product_rating: {
        Args: { p_product_id: string }
        Returns: undefined
      }
    }
    Enums: {
      banner_placement:
        | "home_hero"
        | "home_promo_strip"
        | "category_top"
        | "pdp_ad"
      cart_status: "active" | "converted" | "abandoned"
      coupon_discount_type:
        | "percent"
        | "fixed_amount"
        | "free_shipping"
        | "bogo"
      coupon_stack_type: "standalone" | "code" | "auto_apply" | "free_shipping"
      media_source: "unsplash" | "fal_generated" | "user_upload" | "seed_url"
      media_usage:
        | "product"
        | "category"
        | "banner"
        | "room"
        | "style"
        | "store"
        | "avatar"
        | "review"
        | "page"
        | "other"
      order_status:
        | "pending"
        | "paid"
        | "packed"
        | "shipped"
        | "delivered"
        | "cancelled"
        | "refunded"
      page_status: "draft" | "published"
      payment_fee_type: "none" | "fixed" | "percent"
      payment_status:
        | "pending"
        | "succeeded"
        | "failed"
        | "refunded"
        | "partially_refunded"
      product_status: "draft" | "active" | "archived"
      review_status: "published" | "hidden" | "flagged"
      shipment_status:
        | "pending"
        | "shipped"
        | "in_transit"
        | "delivered"
        | "returned"
        | "cancelled"
      user_gender: "male" | "female" | "other" | "prefer_not"
      user_language: "th" | "en"
      user_tier: "bronze" | "silver" | "gold" | "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      banner_placement: [
        "home_hero",
        "home_promo_strip",
        "category_top",
        "pdp_ad",
      ],
      cart_status: ["active", "converted", "abandoned"],
      coupon_discount_type: [
        "percent",
        "fixed_amount",
        "free_shipping",
        "bogo",
      ],
      coupon_stack_type: ["standalone", "code", "auto_apply", "free_shipping"],
      media_source: ["unsplash", "fal_generated", "user_upload", "seed_url"],
      media_usage: [
        "product",
        "category",
        "banner",
        "room",
        "style",
        "store",
        "avatar",
        "review",
        "page",
        "other",
      ],
      order_status: [
        "pending",
        "paid",
        "packed",
        "shipped",
        "delivered",
        "cancelled",
        "refunded",
      ],
      page_status: ["draft", "published"],
      payment_fee_type: ["none", "fixed", "percent"],
      payment_status: [
        "pending",
        "succeeded",
        "failed",
        "refunded",
        "partially_refunded",
      ],
      product_status: ["draft", "active", "archived"],
      review_status: ["published", "hidden", "flagged"],
      shipment_status: [
        "pending",
        "shipped",
        "in_transit",
        "delivered",
        "returned",
        "cancelled",
      ],
      user_gender: ["male", "female", "other", "prefer_not"],
      user_language: ["th", "en"],
      user_tier: ["bronze", "silver", "gold", "admin"],
    },
  },
} as const
