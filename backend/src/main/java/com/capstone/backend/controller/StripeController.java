package com.capstone.backend.controller;
import com.stripe.Stripe;

import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



import java.util.HashMap;
import java.util.Map;



@Getter
@Setter
@RestController
public class StripeController {


    @Value("${stripe.api.key}")
        private String stripeApiKey;



        @PostMapping("/create-payment-intent")

            public Map<String, String> createPaymentIntent(@RequestBody Map<String, Object> data) {
                Stripe.apiKey = stripeApiKey;

                int amount = (int) data.get("amount");



                PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
                        .setAmount((long) amount)
                        .setAmount((long) amount)
                        .setCurrency("usd")
                        .setCurrency("usd")
                        .build();

                try {

                            PaymentIntent intent = PaymentIntent.create(params);
                            Map<String, String> responseData = new HashMap<>();
                            responseData.put("clientSecret", intent.getClientSecret());
                            return responseData;

                      } catch (StripeException e) {
                            throw new RuntimeException("Stripe Payment Intent creation failed", e);

                        }
                }}





